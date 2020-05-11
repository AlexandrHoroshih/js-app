const Home = () => (
  <>
    <h1>Test H1</h1>
    <h2>Test H2</h2>
    <h2 className="as-h1">Test H2 as H1</h2>
    <div
      style={{
        width: 200,
        height: 200,
        backgroundColor: 'var(--red-base)',
        borderRadius: 6,
      }}
    ></div>
    <div
      style={{
        width: 200,
        height: 200,
        backgroundColor: 'var(--red-smooth)',
        borderRadius: 6,
        marginTop: 20,
      }}
    ></div>
  </>
);

export default Home;
