class SessionsController < ApplicationController
  def landing
    # render "landing"
    redirect_to landing_path unless request.fullpath == '/'
  end

  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to products_path, notice: "Welcome back!"
    else
      flash.now.alert = "Invalid login credentials!! Get out!"
      render "new"
    end
  end

  def destroy
    session.delete :user_id
    redirect_to login_path, notice: "Logged out!"
  end
end
