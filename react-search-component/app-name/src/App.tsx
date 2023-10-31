// import { useState } from 'react';
import { useState } from 'react';
import './App.css';

const quotes: string[] = [
  'Everything I am about to tell you is based on lies',
  'It does not do well to dwell on dreams and forget to live.',
  'If you want a motorcar, pluck it out of the trees',
  'To the well-organized mind, death is but the next great adventure.',
  "You're a little scary sometimes, you know that? Brilliant, but scary.",
  'There will be no foolish wand-waving or silly incantations in this class.',
  'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.',
  'If there is one thing Voldemort cannot understand, it is love.',
  'As much money and life as you could want!',
  'The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution.',
  "There are some things you can't share without ending up liking each other, and knocking out a twelve-foot mountain troll is one of them.",
  'Ah, music. A magic beyond all we do here!',
  'Nitwit, Blubber, Oddment, Tweak',
];

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <>
      <SearchBar searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
      <SearchableList searchTerm={searchTerm} list={quotes} />
    </>
  );
}

export default App;

type SearchableListProps = {
  list: string[];
  searchTerm: string;
};

function SearchableList({ list, searchTerm }: SearchableListProps) {
  const filteredQuoteList = list.filter((quote) =>
    quote.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
  const quoteList = filteredQuoteList.map((quote, index) => (
    <li key={quote + index}>{quote}</li>
  ));
  if (!quoteList.length) {
    return <div>No quotes</div>;
  }
  0;
  return <ul>{quoteList}</ul>;
}

type SearchBarProps = {
  searchTerm: string;
  onSearchTermChange: (string: string) => void;
};

function SearchBar({ searchTerm, onSearchTermChange }: SearchBarProps) {
  return (
    <input
      placeholder="search"
      name="searchbar"
      value={searchTerm ?? ''}
      type="text"
      onChange={(e) => onSearchTermChange(e.target.value)}></input>
  );
}
