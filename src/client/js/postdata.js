
const postData = async (text={}) => {
    const response = await fetch('http://localhost:3000/analyze', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(text),
    });
    try {
      const newData = await response.json();
      return newData;
    } catch (error) {
      console.log("error", error);
    }
  }

  export {postData}