from dotenv import dotenv_values, load_dotenv


# example 1
# loade alle values
environment_variables = dotenv_values()
print(environment_variables["MYSQL_PASSWORD"])

# example 2
import os

load_dotenv()
print(os.getenv("MYSQL_PASSWORD"))
