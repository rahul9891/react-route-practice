import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    {id: 'q1', text: 'THis is the first quote', author: 'Rahul'},
    {id: 'q2', text: 'THis is the second quote', author: 'Rahul Singh'}
];

const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES} />
};

export default AllQuotes;