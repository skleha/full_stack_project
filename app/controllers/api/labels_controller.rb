class Api::LabelsController < ApplicationController

  def index
    @labels = Label.where(user_id: current_user.id)
    render :index
  end

  def show
    @label = Label.find(params[:id])
    render :show
  end

  def create
    @label = Label.new(label_params)

    if @label.save
      render :show
    else
      render json: @label.errors.full_messages, status: 422
    end

  end

  def update
    @label = Label.find(params[:id])

    if @label.update(label_params)
      render :show
    else
      render json: @label.errors.full_messages, status: 422
    end

  end

  def destroy
    @label = Label.find(params[:id])
    
    if @label.destroy
      render :show
    else
      render plain: "No label found to destroy."
    end

  end

  private

  def label_params
    params.require(:label).permit(:name, :user_id)
  end

end
