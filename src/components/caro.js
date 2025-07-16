import { Carousel } from "@material-tailwind/react";
 
const Caro=()=> {
  return (
    <Carousel autoplay={true} autoplayDelay={3000} loop={true} className="rounded-xl ">
      <img
        src="https://media.istockphoto.com/id/610431768/photo/fitness-club-in-luxury-hotel-interior.jpg?s=612x612&w=0&k=20&c=IkusSsZFq1kauP2FhSSw0Jmx92WuSSvlksesEZGw0ik="
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://media.istockphoto.com/id/1183038884/photo/view-of-a-row-of-treadmills-in-a-gym-with-people.jpg?s=612x612&w=0&k=20&c=VnTSyKHKl-YFOmpFqW_hNyIlis0sFksfcR9Ei3-r29s="
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://icieducation.co.uk/blog/wp-content/uploads/2021/12/Fitness-1.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="https://media.istockphoto.com/id/1475282791/photo/personal-trainer-exercise-and-stopwatch-with-a-black-woman-coaching-a-client-in-a-gym-during.jpg?s=612x612&w=0&k=20&c=dxVcsVqj1FfEwmj7Km_pW3KwLzYKV4ds2DcLD3vmy7E="
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="https://westwood.ie/img/asset/aW1hZ2VzL3BlcnNvbmFsdHJhaW5pbmcvd2VzdC13b29kX29jdC0yMDI0LS0tMDAwMzAtMTczMDI5NDUxMC5qcGc/west-wood_oct-2024---00030-1730294510.jpg?fit=contain&w=1400&h=934&s=1d2d86224f7e6ce590c08974299af4df"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="https://www.shutterstock.com/image-photo/gym-subscription-personal-trainer-happy-260nw-2191542161.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}

export default Caro