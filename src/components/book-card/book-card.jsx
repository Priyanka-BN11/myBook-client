export const BookCard = ({book, onBookClick}) => {
  return   <div onClick={() => {onBookClick(book);
  }}
  >{book.title}</div>;
};
//above code is same as below
//export const BookCard = (props) => {
//  const { book } = props;
//  return <div>{book.title}</div>;
//}