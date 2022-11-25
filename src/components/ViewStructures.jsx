import React, { useEffect, useState } from "react";
import { collection, query, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";
import Structure from "./Structure";
import { TreeNode } from "react-organizational-chart";

function ViewStructures({ path }) {
    const [structures, setStructures] = useState([]);

    useEffect(() => {
        const q = query(collection(db, path));

        const unsub = onSnapshot(q, (querySnapshot) => {
            let temp = [];

            querySnapshot.forEach((doc) => {
                temp.push({ ...doc.data(), id: doc.id });
            });

            setStructures(temp);
        });

        return () => unsub();
    }, []);

    const handleEdit = async (str, values) => {
        updateDoc(doc(db, path, str.id), values)
            .then(() => toast.success("Structure Updated"))
            .catch(() => toast.error("Error"));
    };

    const handleDelete = async (str) => {
        deleteDoc(doc(db, path, str.id))
            .then(() => toast.success("Structure Deleted"))
            .catch(() => toast.error("Error"));
    };

    return (
        <>
            {structures?.map((str) => (
                <TreeNode
                    key={str.id}
                    label={
                        <Structure
                            path={path}
                            structure={str}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    }
                >
                    <ViewStructures path={path + "/" + str.id + "/children"} />
                </TreeNode>
            ))}
        </>
    );
}

export default ViewStructures;
