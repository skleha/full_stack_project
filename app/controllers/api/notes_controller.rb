class Api::NotesController < ApplicationController

  def index
    notes = filter ?
      Note.by_filter_and_author(filter, current_user.id) 
    : Note.by_author(current_user.id)
    
    @notes = notes.includes(:labels)
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
      render plain: "No note found to destroy."
    end
  end


  private

  def note_params
    params.require(:note).permit(:title, :body, :author_id, :pinned, :color, :img_url, :reminder, :archived)
  end

  def filter
    params[:filter]
  end



end

