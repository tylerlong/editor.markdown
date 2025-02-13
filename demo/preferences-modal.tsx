import { Button, Form, Modal, Select } from "antd";
import { auto } from "manate/react";
import React from "react";

import { Store } from "./store.ts";

const PreferencesModal = (props: { store: Store }) => {
  const { store } = props;
  const { preferences } = store;
  return (
    <Modal
      open={store.preferencesModalOpen}
      footer={
        <div style={{ textAlign: "center" }}>
          <Button
            type="primary"
            size="large"
            onClick={() => (store.preferencesModalOpen = false)}
          >
            Close
          </Button>
        </div>
      }
      onCancel={() => (store.preferencesModalOpen = false)}
      maskClosable={true}
      centered={true}
    >
      <div style={{ textAlign: "center" }}>
        <p>
          <img src="icon.svg" width="64" />
        </p>
        <h2>MarkPlus Preferences</h2>
        <Form labelCol={{ span: 8 }} wrapperCol={{ span: 12 }} labelWrap>
          <Form.Item label="Toolbar">
            <Select
              value={preferences.toolbar}
              options={[
                { value: "show", label: "Show" },
                { value: "hide", label: "Hide" },
                { value: "none", label: "None" },
              ]}
              onChange={(value) => (preferences.toolbar = value)}
            />
          </Form.Item>
          <Form.Item label="Mode">
            <Select
              value={preferences.mode}
              options={[
                { value: "both", label: "Both" },
                { value: "editor", label: "Editor" },
                { value: "preview", label: "Preview" },
              ]}
              onChange={(value) => (preferences.mode = value)}
            />
          </Form.Item>
          <Form.Item label="Theme">
            <Select
              value={preferences.theme}
              options={[
                { value: "auto", label: "Auto" },
                { value: "light", label: "Light" },
                { value: "dark", label: "Dark" },
              ]}
              onChange={(value) => (preferences.theme = value)}
            />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default auto(PreferencesModal);
