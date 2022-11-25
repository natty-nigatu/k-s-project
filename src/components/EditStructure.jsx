import { Button, Form, Input, Modal } from "antd";
import React from "react";

function EditStructure({ isModalOpen, setIsModalOpen, structure, updateStructure }) {
    const [form] = Form.useForm();

    const onCreate = async (values) => {
        updateStructure(values);
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
            title="Edit Structure"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
        >
            <Form
                form={form}
                name="basic"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ name: structure.name, description: structure.description }}
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
                    Update Structure
                </Button>
            </div>
        </Modal>
    );
}

export default EditStructure;
