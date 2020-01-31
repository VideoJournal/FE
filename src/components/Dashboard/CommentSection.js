import React, { useContext, useState } from "react";
import { AppContext } from "../../AppProvider";
import { useParams, useHistory } from "react-router-dom";
import { Comment, Icon, Tooltip, Avatar } from "antd";
import { Form, Button, List, Input } from "antd";

import moment from "moment";
import styled from "styled-components";

const CommentSection = () => {
  let data = useHistory();
  const [comment, setComment] = useState("");
  const [id] = useState(data.location.pathname.substring(7));
  const { addComment } = useContext(AppContext);
  const { TextArea } = Input;

  const onSubmit = () => {
    addComment(comment, id);
    setComment("");
  };

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
            Comment Example :We supply a series of design principles, practical
            patterns and high quality design resources (Sketch and Axure), to
            help people create their product prototypes beautifully and
            efficiently.
          </p>
        }
        datetime={
          <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />
      <Form.Item>
        <TextArea
          rows={4}
          onChange={e => setComment(e.target.value)}
          value={comment}
        />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          // loading="true"
          onClick={onSubmit}
          type="primary"
        >
          Add Comment
        </Button>
      </Form.Item>
    </Root>
  );
};

export default CommentSection;

const Root = styled.div`
  margin-top: 50px;
`;
