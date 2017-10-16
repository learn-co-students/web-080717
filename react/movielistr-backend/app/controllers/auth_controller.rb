class AuthController < ApplicationController
  # Login
  skip_before_action :authorized, only: [:create]


  # give me a username
  # look up username
  # compare hashed password to stored password digest
  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      # you are who you say you are
      token = JWT.encode({user_id:user.id}, "learnlovecode")
      render json: {user: user, token: token}
    else
      render json: { message: "Wrong username or password"}
    end
  end
end
