// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from 'react-router-dom';
// import { getCollection } from '../../../store/collections'
// import { getImages } from "../../../store/images";
// import { Link } from "react-router-dom";


// function SelectedCollection() {
//   const { id } = useParams();
//   const dispatch = useDispatch()

//   const userId = useSelector(state => state.session.user?.id);
//   const [images, setImages] = useState([])

//   const allImages = useSelector(state => { return Object.values(state.images) });
//   const imgs = allImages.filter(image => image.collectionId === Number(id))
//   console.log(imgs, '----------- imgs --------------')


//   useEffect(() => {
//     if (!images?.collectionId || collections) return;
//     dispatch(getCollection(images.collectionId))
//   }, [images, collections, dispatch])
//   // useEffect(() => {
//   //   if (!images) {
//   //     setImages()
//   //   }
//   // }, [images])

//   useEffect(() => {
//     dispatch(getCollection(Number(id)))
//   }, [dispatch, id])

//   useEffect(() => {
//     dispatch(getImages())
//   }, [dispatch])

//   return (
//     <div className="target-collections-container-div">
//       <div>
//         {images?.map(image => {
//           return (
//             <Link key={image?.id} to={`/images/${image?.id}`}>
//               <img src={image?.imageUrl} alt=""></img>
//             </Link>
//           )
//         })}
//         <h2>{id}</h2>
//       </div>
//     </div>
//   )
// }

// export default SelectedCollection;
