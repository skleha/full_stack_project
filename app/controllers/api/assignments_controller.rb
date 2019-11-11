class Api::AssignmentsController < ApplicationController

  def index
    const user = User.find(current_user.id)
    @assignments = user.assignments
    render :index
  end

  def show
    @assignment = Assignment.find(params[:id])    
    render :show
  end

  def create
    @assignment = Assignment.new(assignment_params)

    if @assignment.save
      render :show
    else
      render json: @assignment.errors.full_messages, status: 422
    end

  end

  def destroy
    @assignment = Assignment.find(params[:id])

    if @assignment.destroy
      render :show
    else
      render plain: "No assignment found."
    end

  end


  private

  def assignment_params
    params.require(:assignment).permit(:note_id, :label_id)
  end

end
