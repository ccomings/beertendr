class CreateBreweries < ActiveRecord::Migration[5.1]
  def change
    create_table :breweries do |t|

      t.timestamps
    end
  end
end
