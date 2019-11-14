//const apiKey = '9HKRzxwyRS6hNaa15BPUOKSUNnAARqJ6AJCa0QJdusbzomqGIvLErZxnFnkNJTpi0OoO-Kt2OntBaYXrhC9_lJbNCY-UOAPEV-xZ9EUQA3zWMa0CoQ5EfSnIsXjfW3Yx';
const apiKey = '1234';
const yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers : {
            Authorization: `Bearer ${apiKey}`,
        },
    }).then((response) => {
        return response.json();
    }).then((jsonResponse) => {
        if(jsonResponse.businesses){
            return jsonResponse.businesses.map(((business) =>{
                console.log(business);
                return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    rating: business.rating
                    };
                }));
            }
        })
    }
};

export default yelp;
