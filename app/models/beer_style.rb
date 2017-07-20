# == Schema Information
#
# Table name: beer_styles
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  beer_id    :integer          not null
#  style_id   :integer          not null
#

class BeerStyle < ApplicationRecord
  validates :beer_id, :style_id, presence: true
  belongs_to :beer
  belongs_to :style
end