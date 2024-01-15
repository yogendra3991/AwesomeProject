import React, { FormEvent, ChangeEvent } from 'react';

export interface Props {
  // Define any props you need for the controller here
}

interface ImageData {
    title: string;
    url: string;
  }
  

  interface State {
model:boolean;
image:string;  
title:string;
}


class SactionController extends React.Component<
  Props,
  S,
  SS
> {
  constructor(props: Props) {
    super(props);
    this.state = {modal:false
    };
  }

 


  componentDidMount(): void {
      console.log('component')
  }




}

export default SactionController;
