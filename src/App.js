import { Button, Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import AddStructure from "./components/AddStructure";
import RootStructure from "./components/RootStructures";
import ViewStructures from "./components/ViewStructures";

function App() {
    const path = "structure";
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const handleAddModalOpen = () => setIsAddModalOpen(true);

    return (
        <>
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={["1"]}
                        items={[
                            {
                                key: 1,
                                label: `Organization`,
                            },
                        ]}
                    />
                </Header>
            </Layout>
            <div className="my-4 mx-8">
                <Button
                    onClick={handleAddModalOpen}
                    size="large"
                    block
                    type="primary"
                    className="bg-sky-500"
                >
                    Add Root Structure
                </Button>
            </div>
            <RootStructure path={path} />

            <AddStructure
                isModalOpen={isAddModalOpen}
                setIsModalOpen={setIsAddModalOpen}
                path={path}
                name="Root"
            />
            <ToastContainer />
        </>
    );
}

export default App;
