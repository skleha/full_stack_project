class Api::NotesController < ApplicationController

  def index
    @notes = Note.where(author_id: current_user.id)
    render :index
  end


  def show
    @note = Note.find(params[:id])
    render :show
  end


  def create
    @note = Note.new(note_params)

    if @note.save
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end

  end

  
  def update
    @note = Note.find(params[:id])

    if @note.update(note_params)
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end

  end


  def destroy
    @note = Note.find(params[:id])
    if @note.destroy
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end


  private

  def note_params
    params.require(:note).permit(:title, :body, :author_id, :pinned, :color, :img_url, :reminder, :archived)
  end

end