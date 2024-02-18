import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

interface SwaggerUIProps {
  url: string;
}

const SwaggerDoc: React.FC<SwaggerUIProps> = ({ url }) => {
  return <SwaggerUI url={url} />;
};

export default SwaggerDoc;