def are_you_playing_banjo(name):
    # Implement me!
    return name + " plays banjo" if name.lower().startswith('r') else name + " does not play banjo"

are_you_playing_banjo = lambda name: name + " plays banjo" if name.lower().startswith('r') else name + " does not play banjo"