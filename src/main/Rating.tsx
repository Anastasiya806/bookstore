import './rating.css'

const Rating = (props: {stars: string}) => {
    const rating = props.stars
    
    if(rating === '1') {
        return (
          <>
            <div className="rating-starBlack" />
            <div className="rating-star" />
            <div className="rating-star" />
            <div className="rating-star" />
            <div className="rating-star" />
          </> 
        );
    }
    if(rating === '2') {
        return (
          <>
            <div className="rating-starBlack" />
            <div className="rating-starBlack" />
            <div className="rating-star" />
            <div className="rating-star" />
            <div className="rating-star" />
          </> 
        );
    }
    if(rating === '3') {
        return (
          <>
            <div className="rating-starBlack" />
            <div className="rating-starBlack" />
            <div className="rating-starBlack" />
            <div className="rating-star" />
            <div className="rating-star" />
          </> 
        );
    }
    if(rating === '4') {
        return (
          <>
            <div className="rating-starBlack" />
            <div className="rating-starBlack" />
            <div className="rating-starBlack" />
            <div className="rating-starBlack" />
            <div className="rating-star" />
          </> 
        );
    }
    if(rating === '5') {
        return (
          <>
            <div className="rating-starBlack" />
            <div className="rating-starBlack" />
            <div className="rating-starBlack" />
            <div className="rating-starBlack" />
            <div className="rating-starBlack" />
            <div className="rating-starBlack" />
          </> 
        );
    }

    return (
      <>
        <div className="rating-star" />
        <div className="rating-star" />
        <div className="rating-star" />
        <div className="rating-star" />
        <div className="rating-star" />
      </>
    );
}

export default Rating;