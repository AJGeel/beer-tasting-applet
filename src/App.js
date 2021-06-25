import "./styles/index.css";

function ListItem(props) {
  return <li className="p-3 bg-gradient-to-tr from-royal-gold to-royal-gold-light text-royal-gold-dark font-medium rounded-sm transform filter duration-150 hover:translate-x-2 cursor-pointer hover:brightness-120 active:translate-x-0 active:opacity-75">{props.text}</li>
}

function ExternalLink(props) {
  return <a href={props.href} target="_blank" className="text-royal-gold underline hover:text-black">{props.label}</a>
}

const App = () => {
  return (
    <div className="App bg-gradient-to-b from-white to-royal-gold-light h-[100vh] flex items-center justify-center flex-col">
      <div className="w-96 mx-auto">
        <h1 className="font-bold text-4xl text-[#333]">Beer tasting applet 🍻</h1>
        <p className="mt-2">A simple, interactive form which helps you appraise the beers you drink in five categories. Check out the PDF on which this app is based by <ExternalLink href="https://www.craftbeer.com/educational-resources/beer-tasting-sheet" label="clicking here"></ExternalLink>.</p>
        <ol className="text-sm list-decimal list-inside space-y-1 mt-6">
          <ListItem text="Appearance"></ListItem>
          <ListItem text="Aroma"></ListItem>
          <ListItem text="Flavour &amp; Aftertaste"></ListItem>
          <ListItem text="Palate &amp; Oxidative Qualities"></ListItem>
          <ListItem text="Balance, Drinkability &amp; Style"></ListItem>
        </ol>
      </div>
    </div>
  );
};

export default App;
