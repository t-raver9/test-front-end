import { useState } from "react";

import { gql, useQuery } from "@apollo/client";

const GET_MESSAGE = gql`
  query GetUser($id: Int!) {
    user(id: $id) {
      id
      email
    }
  }
`;

function App() {
  const [count, setCount] = useState(0);

  const { data } = useQuery(GET_MESSAGE, {
    variables: { id: count },
  });

  return (
    <div className="App">
      <div>
        <button onClick={() => setCount(count + 1)}>
          Hallo min ven. You click dis one slowly now.
        </button>
        <div>{data?.user?.email || ""}</div>
      </div>
    </div>
  );
}

export default App;
