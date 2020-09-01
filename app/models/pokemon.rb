class Pokemon < ApplicationRecord
  validates :name, presence: true
  validates :kind, presence: true

  has_many :abilities
end
