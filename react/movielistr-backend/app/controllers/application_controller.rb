class ApplicationController < ActionController::API

  before_action :authorized
  def encode(payload)
    # give us a jwt token
    JWT.encode(payload, "learnlovecode")
  end


  def decode(token)
    begin
      JWT.decode(token, "learnlovecode", true, {algorithm: "HS256"}) # [{user_id: 1}]
    rescue JWT::DecodeError
      [{}]
    end

  end


  def current_user
    header_token = request.headers["Authorization"]
    token = header_token.split(" ")[1]
    decoded_token = decode(token)
    user_id = decoded_token[0]["user_id"]
    if user = User.find(user_id)
      user
    else
      false
    end
  end


  def logged_in?
    !!current_user
  end


  def authorized


    render json: { message: "Not logged in"} unless logged_in?
    #redirect_to "/welcome" unless logged_in?
  end



end
