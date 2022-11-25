import { Button, Form, Input, Modal } from "antd";
import React from "react";

import { db } from "../firebase";
import { collection, addDoc, limitToLast } from "firebase/firestore";
import { toast } from "react-toastify";

function AddStructure({ isModalOpen, setIsModalOpen, path, name }) {
    const [form] = Form.useForm();

    const onCreate = async (values) => {
        addDoc(collection(db, path), values)
            .then(() => toast.success("Structure Added"))
            .catch(() => toast.error("Error"));

        handleCancel();
    };

    const handleOk = () => {
        form.validateFields().then((values) => {
            form.resetFields();
            onCreate(values);
        });
        /*
            .catch((info) => {
                console.log("Validate Failed:", info);
            });
            */
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <Modal
            title={`Add Structure to ${name}`}
            open={isModalOpen}
            okText={"Add Structure"}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
        >
            <Form
                form={form}
                name="basic"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                autoComplete="off"
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: "Please enter name!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: "Please enter description!" }]}
                >
                    <Input />
                </Form.Item>
            </Form>
            <div className="flex justify-end gap-3">
                <Button onClick={handleCancel}>Cancel</Button>
                <Button onClick={handleOk} type="primary" className="bg-sky-600">
                    Add Structure
                </Button>
            </div>
        </Modal>
    );
}

export default AddStructure;
