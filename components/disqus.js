import React from "react";
import { DiscussionEmbed } from "disqus-react";

const Disqus = ({ identifier, query, title }) => {
  return (
    <div>
      <DiscussionEmbed
        shortname="disasterscansnew"
        config={{
          url: `http://localhost:3000/${query}`,
          identifier: identifier,
          title: title,
        }}
      />
    </div>
  );
};

export default Disqus;
