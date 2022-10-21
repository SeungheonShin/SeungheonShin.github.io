import React, { useRef, useEffect } from 'react';

const src = 'https://utteranc.es/client.js';
const repo = 'SeungheonShin/SeungheonShin.github.io';

type UtterancesAttributesType = {
  src: string,
  repo: string,
  'issue-term': string,
  label: string,
  theme: string,
  crossorigin: string,
  async: string,
};

const CommentWidget: React.FC = () => {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (element.current === null) return;

    const utterances: HTMLScriptElement = document.createElement('script');

    const attributes: UtterancesAttributesType = {
      src,
      repo,
      'issue-term': 'pathname',
      label: 'Comment',
      theme: `photon-dark`,
      crossorigin: 'anonymous',
      async: 'true',
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    element.current?.appendChild(utterances);
  }, []);

  return <div ref={element} />;
};

export default CommentWidget;
