import "./UserPage.css"





// TEMPLATE FROM https://www.webtopic.com/bootstrap-user-profile-templates/


function UserPage () {
        return (


<div class="userpage-frame">
  <div class="center">
    
		<div class="profile">
			<div class="image">
				<div class="circle-1"></div>
				<div class="circle-2"></div>
				<img src={require ("./OIP.jpg")} width="70" height="70" alt="Jessica Potter"/>
			</div>
			
			<div class="greeting">Hey👋🏾</div>
			<div class="username">Suzie_C</div>
			

            <div class="points-div">
                <p>YOU HAVE</p>
                <p class="big-no">27</p>
                <p>🏓PING PONG POINTS🏓</p>
            
            </div>



            {/* BUTTONS */}
			<div class="actions">
			<button class="edit-btn" type="button" data-toggle="modal" data-target="#ModalLoginForm"> Edit Profile</button>
				
                <form action="/">
                <button class="logout-btn">Log Out</button>
                </form>
			</div>
		</div>
		





		{/* <div class="stats">
			<div class="box">
				<span class="value">523</span>
				<span class="parameter">Posts</span>
			</div>
			<div class="box">
				<span class="value">1387</span>
				<span class="parameter">Likes</span>
			</div>
			<div class="box">
				<span class="value">146</span>
				<span class="parameter">Follower</span>
			</div>
		</div> */}
  </div>
</div>








        )






/* <div id="ModalLoginForm" class="modal fade">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title">Login</h1>
            </div>
            <div class="modal-body">
                <form role="form" method="POST" action="">
                    <input type="hidden" name="_token" value="">
                    <div class="form-group">
                        <label class="control-label">E-Mail Address</label>
                        <div>
                            <input type="email" class="form-control input-lg" name="email" value="">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Password</label>
                        <div>
                            <input type="password" class="form-control input-lg" name="password">
                        </div>
                    </div>
                    <div class="form-group">
                        <div>
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="remember"> Remember Me
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div>
                            <button type="submit" class="btn btn-success">Login</button>

                            <a class="btn btn-link" href="">Forgot Your Password?</a>
                        </div>
                    </div>
                </form>
                <h1>Or Signup!</h1>
                <form role="form" method="POST" action="">
                    <input type="hidden" name="_token" value="">
                    <div class="form-group">
                        <label class="control-label">Username</label>
                        <div>
                            <input type="text" class="form-control input-lg" name="name" value="">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label">E-Mail Address</label>
                        <div>
                            <input type="email" class="form-control input-lg" name="email" value="">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Password</label>
                        <div>
                            <input type="password" class="form-control input-lg" name="password">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Confirm Password</label>
                        <div>
                            <input type="password" class="form-control input-lg" name="password_confirmation">
                        </div>
                    </div>
                    <div class="form-group">
                        <div>
                            <button type="submit" class="btn btn-success">
                                Register
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal --> */












    }


    export default UserPage;