package com.themealdb.explorer.controller;

import com.themealdb.explorer.service.MealService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/meals")
@RequiredArgsConstructor
public class MealController {

    private final MealService mealService;

    @GetMapping("/search")
    public ResponseEntity<?> searchMeals(@RequestParam String name) {
        return ResponseEntity.ok(mealService.searchMeals(name));
    }

    @GetMapping("/categories")
    public ResponseEntity<?> categories() {
        return ResponseEntity.ok(mealService.getCategories());
    }

    @GetMapping("/category")
    public ResponseEntity<?> mealsByCategory(@RequestParam String name) {
        return ResponseEntity.ok(mealService.getMealsByCategory(name));
    }

    @GetMapping("/random")
    public ResponseEntity<?> randomMeal() {
        return ResponseEntity.ok(mealService.getRandomMeal());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> mealDetails(@PathVariable String id) {
        return ResponseEntity.ok(mealService.getMealDetails(id));
    }
}

