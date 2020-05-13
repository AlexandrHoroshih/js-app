import * as React from 'react';

const Headers = () => {
  return (
    <div style={{ padding: 20 }}>
      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <h4>Header 4</h4>
      <h5>Header 5</h5>
      <h6>Header 6</h6>
      <p>
        All header tags have predefied globally styles. For all headers there
        are .as-h* classes to make them (or other text) look like the specific
        header, example:
      </p>
      <p style={{ color: 'red' }}>
        {'<h2 className="as-h5">H2 but looks like H5</h2>'}
      </p>
      <h2 className="as-h5">H2 but looks like H5</h2>
    </div>
  );
};

export default Headers;
