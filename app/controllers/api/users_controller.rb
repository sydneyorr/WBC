class Api::UsersController < ApplicationController


def update
  @user = User.find(params[:id])
  if (@user.update(user_params))
    render json: @user
  else
end
end

def all_clicks
  render json: User.all_clicks
end

private

def user_params
  params.require(:user).permit(:name, :clicks)
end

end
