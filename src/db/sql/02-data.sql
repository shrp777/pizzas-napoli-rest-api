BEGIN TRANSACTION;
INSERT INTO "pizzas"
VALUES (
        1,
        'Margherita',
        7.0,
        '["mozzarella","basilic"]',
        'Tomate'
    );
INSERT INTO "pizzas"
VALUES (2, 'Marinara', 6.0, '["ail","origan"]', 'Tomate');
INSERT INTO "pizzas"
VALUES (
        3,
        'Quattro Stagioni',
        12.0,
        '["jambon","mozzarella","champignons","coeurs d''artichaut"]',
        'Tomate'
    );
INSERT INTO "pizzas"
VALUES (
        4,
        'Capricciosa',
        12.0,
        '["jambon","mozzarella","champignons","coeurs d''artichaut","olives"]',
        'Tomate'
    );
INSERT INTO "pizzas"
VALUES (
        5,
        'Boscaiola',
        12.0,
        '["jambon cru","champignons","mozzarella"]',
        'Crème'
    );
INSERT INTO "pizzas"
VALUES (
        6,
        'Rucola',
        12.0,
        '["jambon cru","roquette","mozzarella","parmesan"]',
        'Nature'
    );
COMMIT;