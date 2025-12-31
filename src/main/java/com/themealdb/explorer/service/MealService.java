package com.themealdb.explorer.service;

import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@RequiredArgsConstructor
public class MealService {

    private final RestTemplate restTemplate;
    private static final String API_URL = "https://www.themealdb.com/api/json/v1/1/";

    @Cacheable(value = "search", key = "#name")
    public Object searchMeals(String name) {
        return restTemplate.getForObject(API_URL + "search.php?s=" + name, Object.class);
    }

    @Cacheable(value = "categories")
    public Object getCategories() {
        return restTemplate.getForObject(API_URL + "categories.php", Object.class);
    }

    @Cacheable(value = "filter", key = "#category")
    public Object getMealsByCategory(String category) {
        return restTemplate.getForObject(API_URL + "filter.php?c=" + category, Object.class);
    }

    @Cacheable(value = "random")
    public Object getRandomMeal() {
        return restTemplate.getForObject(API_URL + "random.php", Object.class);
    }

    @Cacheable(value = "details", key = "#id")
    public Object getMealDetails(String id) {
        return restTemplate.getForObject(API_URL + "lookup.php?i=" + id, Object.class);
    }
}
