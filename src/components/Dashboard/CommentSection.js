import React from "react";
import { Comment, Icon, Tooltip, Avatar } from "antd";
import { Form, Button, List, Input } from "antd";

import moment from "moment";
import styled from "styled-components";

const CommentSection = () => {
  const { TextArea } = Input;

  const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <div>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          loading={submitting}
          onClick={onSubmit}
          type="primary"
        >
          Add Comment
        </Button>
      </Form.Item>
    </div>
  );

  return (
    <Root>
      <Comment
        author={<a>Han Solo</a>}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure), to help people create
            their product prototypes beautifully and efficiently.
          </p>
        }
        datetime={
          <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />
      <Editor
      // onChange={this.handleChange}
      // onSubmit={this.handleSubmit}
      // submitting={submitting}
      // value={value}
      />
    </Root>
  );
};

export default CommentSection;

const Root = styled.div`
  margin-top: 50px;
`;
