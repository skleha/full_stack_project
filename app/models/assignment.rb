class Assignment < ApplicationRecord
  validates :note_id, :label_id, presence: true
  validates :note_id, uniqueness: { scope: :label_id, message: "Note already has that label"}


end
