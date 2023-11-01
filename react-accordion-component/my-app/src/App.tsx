import { useState } from 'react';
import './App.css';

type Topics = {
  language: string;
  description: string;
};

type TopicsArray = Topics[];

const topics: TopicsArray = [
  {
    language: 'HTML',
    description:
      'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.',
  },
  {
    language: 'CSS',
    description:
      'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentatin of a document written in a markup langauge like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
  },
  {
    language: 'JavaScript',
    description:
      'JavaScript, often abbreviated as JS is a high-level interpreted programming language that conforms to the ECMASCript specifaction. JavaScript has curly-brakcet syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
  },
];

function Accordion() {
  const [activePanel, setActivePanel] = useState<string>('');

  function handleActivePanel(string: string): void {
    if (activePanel === string) {
      setActivePanel('');
    } else {
      setActivePanel(string);
    }
  }

  return (
    <>
      <Panels
        topics={topics}
        activePanel={activePanel}
        handleActivePanel={handleActivePanel}
      />
    </>
  );
}

export default Accordion;

type PanelProps = {
  topics: TopicsArray;
  activePanel: string;
  handleActivePanel: (string: string) => void;
};

function Panels({ handleActivePanel, activePanel, topics }: PanelProps) {
  const topicList = topics.map((item, index) => (
    <div key={item.language + index}>
      <div
        onClick={() => handleActivePanel(item.language)}
        className="titlebox">
        <h3>{item.language}</h3>
      </div>
      {activePanel.toLowerCase() === item.language.toLowerCase() && (
        <div className="bodybox">
          <p>{item.description}</p>
        </div>
      )}
    </div>
  ));
  return <div>{topicList}</div>;
}
