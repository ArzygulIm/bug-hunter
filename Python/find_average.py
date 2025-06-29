# Write a function which calculates the average of the numbers in a given array.

# Note: Empty arrays should return 0.
def find_average(array):
    return 0 if not array else sum(array) / len(array)

find_average = lambda array: sum(array) / len(array) if array else 0

from statistics import mean; find_average = lambda x: mean(x) if len(x) > 0 else 0

find_average = lambda n: __import__("statistics").mean(n or [0])
