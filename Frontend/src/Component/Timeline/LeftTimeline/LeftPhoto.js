import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link,useHistory} from 'react-router-dom'
import Address from '../../../config/config'

// import Comment from './Button_like_comment/Comment'
// import Share from './Button_like_comment/Share'
// import Flag from './Button_like_comment/Flag'
// import Like from './Button_like_comment/Like'

const LeftPhoto=(props)=>{

	const [post, setPost] = useState([]);
	
	
	console.log("Inside Left Photo ----",props)

	const set = props.set;
	if(props.check)
	{

	  set(false)

	}

	
	useEffect(() => {
		axios.get(Address.address[9]).then(response => {
			console.log(response.data);
			setPost(response.data);
		});
		
	}, [props.check]);

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

export default LeftPhoto;
