import React, { FormEvent, ChangeEvent } from 'react';

export interface Props {
  // Define any props you need for the controller here
}

interface ImageData {
    title: string;
    url: string;
  }
  

  interface State {
    imagesData: ImageData[];
  }


class DashboardController extends React.Component<
  Props,
  S,
  SS
> {
  constructor(props: Props) {
    super(props);
    this.state = {
        imagesData:[
        {title:'Image1',url:'https://hips.hearstapps.com/hmg-prod/images/pattern-of-slices-citrus-fruit-of-lemons-oranges-royalty-free-image-1690494580.jpg'},
        {title:'Image2',url:'https://cdn.britannica.com/70/124170-050-B85D38BA/watermelon.jpg'},
        {title:'Image2',url:'https://cdn.britannica.com/70/124170-050-B85D38BA/watermelon.jpg'},
        {title:'Image2',url:'https://cdn.britannica.com/70/124170-050-B85D38BA/watermelon.jpg'},
        {title:'Image2',url:'https://cdn.britannica.com/70/124170-050-B85D38BA/watermelon.jpg'},
        {title:'Image2',url:'https://cdn.britannica.com/70/124170-050-B85D38BA/watermelon.jpg'}


    ]
    };
  }

 


  componentDidMount(): void {
      console.log('component')
  }




}

export default DashboardController;
