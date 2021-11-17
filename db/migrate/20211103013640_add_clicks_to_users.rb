class AddClicksToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :clicks, :integer
  end
end
