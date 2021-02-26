import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link,useHistory} from 'react-router-dom'
import Address from '../../../config/config'
import { connect } from 'react-redux';
import action from '../../../Redux/action'
import store from '../../../Redux/store'

const LeftPhoto=(props)=>{
	
	const [post, setPost] = useState([]);
	const [getTrue,setTrue] = useState(props.flag)
console.log("Inside Right Photo ----",props.Flags)

	useEffect(() => {
		setTrue(props.Flags)
	})
	useEffect(() => {
		axios.get(Address.address[9]).then(response => {
			console.log(response.data);
			setPost(response.data);
		});
		
	}, [getTrue]);

	return (
		<div>
			{post.map(item => {
				return (
					<div>
						<div className='contnt_2'>
							<div className='div_a'>
								<div className='div_title'>{item.Description}</div>
								<div className='btm_rgt'>
									<div className='btm_arc'>{item.name}</div>
								</div>
								<div className='div_top'>
									<div className='div_top_lft'>
										<img src='images/img_6.png' />
										Steave Waugh
									</div>
									<div className='div_top_rgt'>
										<span className='span_date'>{item.Daate}</span>
									</div>
								</div>
								<div className='div_image'>
									<Link to={`/SinglePost/`+item._id }>
									<img src={`http://localhost:4444/${item.image}`} alt='pet' /></Link>
									<div className='div_btm'>
										<div className='btm_list'>
											<ul>
												<li>
													<a href='#'>
														<span className='btn_icon'>
															<img src='images/icon_001.png' alt='share' />
														</span>
														Share
													</a>
												</li>
												<li>
													<a href='#'>
														<span className='btn_icon'>
															<img src='images/icon_002.png' alt='share' />
														</span>
														Flag
													</a>
												</li>
												<li>
													<a href='#' >
														<span className='btn_icon'>
															<img src='images/icon_003.png' alt='share' />
														</span>
														 Likes 
													</a>
												</li>
												<li>
													<a href='#'>
														<span className='btn_icon'>
															<img src='images/icon_004.png' alt='share' />
														</span>
														4 Comments
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};



function mapStateToProps(state) {
    console.log('map------------',state)
    return {
     Flags:state.Flags,
 
    };
 
  }
  
  export default connect(mapStateToProps)(LeftPhoto);
// export default LeftPhoto