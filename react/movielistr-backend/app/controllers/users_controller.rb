class UsersController < ApplicationController
  # SIGNUP -> NEW User


  skip_before_action :authorized, only: [:create]


  def create
    user = User.new(username: params[:username], password: params[:password])
    if user.save

      # what do we need for a jwt token
      # some payload preferably something to identify my user
      #

      payload = { user_id: user.id}
      token = encode(payload)

      render json: {user: user, token: token}
    else
      render json: { message: "Does not work"}
    end
  end


  def me
    byebug
    render json: current_user

    # they should present a wristband
    # I should find that user
    # should then return their info
  end


  def movies
    render json: current_user.movies
  end

  def dogs
  end



end
