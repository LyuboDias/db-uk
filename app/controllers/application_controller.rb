class ApplicationController < ActionController::Base
  # before_action :authenticate_user!
  def default_url_options
    { host: ENV["DOMAIN"] || "www.db-uk.net" }
  end
end
