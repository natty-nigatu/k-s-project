import { Button, Card, Tree } from "antd";
import React, { useState } from "react";
import AddStructure from "./AddStructure";
import EditStructure from "./EditStructure";
import { FaPen, FaPlus, FaTrash } from "react-icons/fa";
import { TreeNode } from "react-organizational-chart";

function Structure({ structure, handleEdit, handleDelete, path }) {
    const newPath = path + "/" + structure.id + "/children";
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const updateStrucutre = (values) => {
        handleEdit(structure, values);
    };

    const deleteStructure = () => {
        handleDelete(structure);
    };

    return (
        <div>
            <div className="flex justify-evenly">
                <div className="shadow-lg border border-1 p-2 rounded-lg text-xl">
                    <div>
                        {structure.name}
                        <div className="mt-2 grid grid-cols-3 gap-2">
                            <Button onClick={() => setIsModalOpen(true)}>
                                <FaPen />
                            </Button>
                            <Button onClick={deleteStructure} type="primary" danger>
                                <FaTrash />
                            </Button>
                            <Button
                                onClick={() => setIsAddModalOpen(true)}
                                type="primary"
                                className="bg-sky-600"
                            >
                                <FaPlus />
                            </Button>
                        </div>
                    </div>

                    <AddStructure
                        path={newPath}
                        name={structure.name}
                        isModalOpen={isAddModalOpen}
                        setIsModalOpen={setIsAddModalOpen}
                    />

                    <EditStructure
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        structure={structure}
                        updateStructure={updateStrucutre}
                    />
                </div>
            </div>
        </div>
    );
}

export default Structure;
