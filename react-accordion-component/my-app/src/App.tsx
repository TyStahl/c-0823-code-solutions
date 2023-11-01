import './App.css';

const topics = [
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
  return (
    <>
      <Panel title={topics[0].language} description={topics[0].description} />
      <Panel title={topics[1].language} description={topics[1].description} />
      <Panel title={topics[2].language} description={topics[2].description} />
    </>
  );
}

export default Accordion;

type PanelProps = {
  title: string;
  description: string;
};

function Panel({ title, description }: PanelProps) {
  return (
    <div className="box">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
