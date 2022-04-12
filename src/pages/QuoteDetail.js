import { Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
    {id: 'q1', text: 'THis is the first quote', author: 'Rahul'},
    {id: 'q2', text: 'THis is the second quote', author: 'Rahul Singh'}
];

const QuoteDetail = () => {
    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if(!quote) {
        return <p>No Quotes Found</p>
    }

    return <div>
        <HighlightedQuote text={quote.text} author={quote.author}/>
        <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
        </div>
};

export default QuoteDetail;