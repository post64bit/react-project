
function Content(props) {
    const randomName = () => {
      const listOfNames = ['Kevin', 'Dave', 'Nelson'];
      const randomIndex = Math.floor(Math.random() * 3);
      return listOfNames[randomIndex]
    };
    return (
        <main>
            <p>Hello {randomName()} </p>
        </main>
    );
}

export default Content;