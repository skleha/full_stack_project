class Label < ApplicationRecord
  validates :name, :user_id, presence: true
  validates :name, uniqueness: { scope: :user_id, message: "Label already exists"}

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  has_many :assignments,
    foreign_key: :label_id,
    class_name: :Assignment

  has_many :notes,
      through: :assignments,
      source: :note

end
